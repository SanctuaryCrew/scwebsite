SanctuaryCrew Hugo Theme
========================

SanctuaryCrew is a relatively simple theme based on [LeaveIt](https://github.com/liuzc/LeaveIt) with pieces from [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) as well.


# Features

* Dark/Light mode
* Wrap Image with Figure Tag without Shortcode. Thanks [Junian.Net](https://www.junian.net/hugo-image-figure-wrap/)
* Load images with Lazy Load By [lazysizes](https://github.com/aFarkas/lazysizes)
* Automatically highlighting code By [Google code-prettify](https://github.com/google/code-prettify), Customizable styles via CSS. See the [themes gallery](https://rawgit.com/google/code-prettify/master/styles/index.html).
* Automagical image gallery with [lightGallery](https://github.com/sachinchoolur/lightGallery)
* ...

# Favicons, Browserconfig, Manifest

It is recommended to put your own favicons

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

into `/static`. They’re easily created via https://realfavicongenerator.net/.

Customize browserconfig.xml and site.webmanifest to set theme-color and background-color for example.

# Tips

#### Set production environment when generating site

Because some functions are only in production mode, So you **need to add a production** environment variables when generating your site.
```bash
HUGO_ENV=production hugo --gc --minify
```

#### Hugo “extended” Sass/SCSS version required

This theme write style with scss, So you must download and install the “extended” Sass/SCSS version


# Questions, ideas, bugs, pull requests?
All feedback is welcome! Head over to the [issue tracker](https://github.com/firehawke/hugo-sc-theme/issues).

# License
LeaveIt is licensed under the MIT license. Check the LICENSE file for details.
The following resources are included in the theme:

* lazysizes - https://github.com/aFarkas/lazysizes
* lightGallery - https://github.com/sachinchoolur/lightGallery
* code-prettify - https://github.com/google/code-prettify

# Author
[Firehawke](https://github.com/firehawke)

# See Also

* [Coder](https://themes.gohugo.io/hugo-coder/)
* [hello-friend](https://themes.gohugo.io/hugo-theme-hello-friend/)
