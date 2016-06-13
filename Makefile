all:
	rsync -r --exclude .git . leim:~/www

prod:
	scp -r html iix.se:/var/www/html.tmp
	ssh iix.se "rm -rf /var/www/html && mv /var/www/html.tmp /var/www/html"

gen:	html_md

##
#  Generate html from md
%.html: %.md
	pandoc -f markdown_github -t html -o $*.html $*.md

html_md: notes wishlist

# partials/notes/*.html
NOTES_MD = $(wildcard md/notes/*.md)
NOTES_HTML = $(NOTES_MD:.md=.html)
notes:	$(NOTES_HTML)
	mv $(NOTES_HTML) html/partials/notes/

# partials/wishlist.html
WISHLIST_TARGET = html/partials/wishlist.html
wishlist: md/wishlist.html
	@# Start div
	@echo "<div class=\"container\" role=\"main\">" > $(WISHLIST_TARGET)

	@sed -i '' 's/<table>/<table class="table table-hover">/' $<
	@cat $< >> $(WISHLIST_TARGET)
	@rm $<

	@# End div
	@echo "</div>" >> $(WISHLIST_TARGET)
	@echo "Created $(WISHLIST_TARGET)"
