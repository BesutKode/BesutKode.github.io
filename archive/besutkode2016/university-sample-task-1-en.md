---
layout: main
---

# Sample task 1

## Task

Contribute 20 new bahasa Indonesia translated messages to the file
https://github.com/phpmyadmin/localized_docs/blob/master/po/id.po .

The task is assessed by reviewing commits by your GitHub username
to that file, and counting new messages added.

Note: these commits do not currently meet the Besut Kode criteria for the
[registration task](http://wikimedia-id.github.io/besutkode/university-modules-id.html),
as the `localized_docs` project does not yet have 50 stars
(only 10 stars as of 29 September).

## Background

*Read The Docs* (RTD) is a commonly used service for hosting documentation.

It is free for [Open Source Software](https://readthedocs.org/),
and also has a [Commercial](https://readthedocs.com/) service.

It supports [multiple languages](http://read-the-docs.readthedocs.io/en/latest/localization.html).

The translated example provided in their documentation is [phpMyAdmin](http://docs.phpmyadmin.net/en/latest/).

Clicking on the "v: latest" at the bottom of [phpMyAdmin](http://docs.phpmyadmin.net/en/latest/)
shows phpMyAdmin has their documentation translated into the following languages:

- en : English
- zh_CN: Simplified Chinese (China)
- cs: Czech 
- fr: French
- de: German
- el: Greek
- hu: Hungarian 
- ja: Japanese
- pt_BR: Portuguese (Brazilian)
- es: Spanish
- tr: Turkish

The English documentation of phpMyAdmin is in the GitHub repository
[`phpmyadmin/phpmyadmin`](https://github.com/phpmyadmin/phpmyadmin)
in the subdirectory [/doc](https://github.com/phpmyadmin/phpmyadmin/tree/master/doc),
and the translations are stored in GitHub repository
[`phpmyadmin/localized_docs`](https://github.com/phpmyadmin/localized_docs).

The translations are stored in [`.po gettext`](https://en.wikipedia.org/wiki/gettext) files
in the subdirectory [/po](https://github.com/phpmyadmin/localized_docs/tree/master/po).

There is a bahasa Indonesia translation in the file
[/po/id.po](https://github.com/phpmyadmin/localized_docs/blob/master/po/id.po),
however it is mostly untranslated, so phpMyAdmin does not include bahasa Indonesia
on their Read The Docs site.

This `id.po` file is editable using a normal text editor, or with specialised applications.
There are a few cross-platform applications mentioned in the English Wikipedia article
about [`gettext`](https://en.wikipedia.org/wiki/gettext).
The syntax used throughout the `.po` file format is very strict and obscure.
This task will require that you gain a basic understanding of the `.po` file format.

There are also specialised libraries for manipulating `.po` files, available for most
popular programming languages, that can be used to programmatically perform translation.

There are also GitHub services for translation of `.po` files, providing a web application for
adding and updating translations.

The phpMyAdmin `localized_docs` project is connected to the [Weblate](https://en.wikipedia.org/wiki/Weblate)
service, where the [bahasa Indonesian translation page](https://hosted.weblate.org/projects/phpmyadmin/documentation/id/)
shows the documentation is 0.6% translated.

If you log into Weblate using your GitHub account, when you contribute translations in Weblate your changes will
be [lazy-committed](https://docs.weblate.org/en/latest/admin/continuous.html#lazy-commit) to the GitHub repository,
such as when someone else does a translation, and appear on your GitHub profile.

The phpMyAdmin project prefers translations are provided using Weblate, as it reduces the
workload for the committers since Weblate automatically commits changes.
Unless there is a very good reason to contribute directly to the repository, do not submit
a Pull Request to complete this task.  An example reason for using a Pull Request is
programmatically translating a very large group of messages using one of the `gettext` libraries.
Even with a good reason, it is not recommended to do this when there are a lot of contributors
to the same file, such as a group task like Besut Kode, as merge conflicts may occur.

Related StackOverflow tags:

- [read-the-docs](http://stackoverflow.com/questions/tagged/read-the-docs)
- [gettext](http://stackoverflow.com/questions/tagged/gettext)
- [weblate](http://stackoverflow.com/questions/tagged/weblate)
- [phpmyadmin](http://stackoverflow.com/questions/tagged/phpmyadmin)
