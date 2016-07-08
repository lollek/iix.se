all:	gen
	npm start
.PHONY: all

prod:	gen
	scp -r www iix.se:/var/www/html.tmp
	ssh iix.se "rm -rf /var/www/html && mv /var/www/html.tmp /var/www/html"
.PHONY: prod

prod2:	gen
	scp -r www david2:/var/www/iix.se.tmp
	ssh david2 "rm -rf /var/www/iix.se && mv /var/www/iix.se.tmp /var/www/iix.se"
.PHONY: prod

gen:	html_md
.PHONY: gen

##
#  Generate html from md
#  - We change add "table" and "table-hover" to tables for nice bootstrap css
www/%.html: gen/%.md
	pandoc -f markdown_github -t html -o www/$*.html gen/$*.md
	sed -i '' \
	  -e 's/<table>/<table class="table table-hover">/' \
	  www/$*.html

MD_SRC = $(wildcard gen/html/*.md) $(wildcard gen/html/**/*.md)
MD_DEST = $(subst gen,www,$(MD_SRC:.md=.html))
html_md: $(MD_DEST)

clean:
	$(RM) $(MD_DEST)
