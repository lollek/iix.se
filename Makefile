all:
	rsync -r --exclude .git . leim:~/www

prod:
	scp -r html iix.se:/var/www/html.tmp
	ssh iix.se "rm -rf /var/www/html && mv /var/www/html.tmp /var/www/html"

NOTES_MD = $(wildcard notes_md/*.md)
NOTES_HTML = $(NOTES_MD:.md=.html)

%.html: %.md
	pandoc -f markdown_github -t html -o $*.html $*.md

notes:	$(NOTES_HTML)
	mv $(NOTES_HTML) html/partials/notes/
