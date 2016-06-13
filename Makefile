all:
	rsync -r --exclude .git . leim:~/www
.PHONY: all

prod:
	scp -r www iix.se:/var/www/html.tmp
	ssh iix.se "rm -rf /var/www/html && mv /var/www/html.tmp /var/www/html"
.PHONY: prod

gen:	html_md
.PHONY: gen

##
#  Generate html from md
%.html: %.md
	pandoc -f markdown_github -t html -o $*.html $*.md

html_md: notes container
.PHONY: html_md

# html/notes/*.html
NOTES_MD = $(wildcard md/notes/*.md)
NOTES_HTML = $(NOTES_MD:.md=.html)
notes:	$(NOTES_HTML)
	mv $(NOTES_HTML) www/html/notes/
.PHONY: notes

# html/{wishlist,beer,moria}.html
CONTAINER_MD = $(wildcard md/*.md)
CONTAINER_HTML = $(CONTAINER_MD:.md=.html)
container: $(CONTAINER_HTML)
	@$(foreach file, $^, \
	  sed -i '' \
	  -e '1s/^/<div class="container" role="main">/' \
	  -e 's/<table>/<table class="table table-hover">/' \
	  -e '$$s/$$/<\/div>/' \
	  $(file);)
	mv $^ www/html/
.PHONY: lists
