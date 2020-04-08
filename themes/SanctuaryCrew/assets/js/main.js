jQuery(function($) {

    'use strict';

    var _Blog = window._Blog || {};

    _Blog.externalUrl = function() {
        $.expr[':'].external = function(obj) {
            return !obj.href.match(/^mailto\:/) &&
                (obj.hostname != location.hostname);
        };
        $('a:external').addClass('external');
        $(".external").attr('target', '_blank');
    }

    _Blog.changeTitle = function() {
        var currentTitle = document.title;
        window.onblur = function() {
            /* Old man Stauf built a house and filled it with his toys.
            Six Guests were invited one night, their screams the only noise.
            Blood in the Library, blood right up the hall,
            dripping down the attic stairs, "Hey Guests!, try not to fall".
            Nobody came out that night. Not one was ever seen.
            But Old man Stauf is waiting there... Crazy! Sick! and MEAN!
            -- The 7th Guest */

            document.title = 'Come baaaaack!';
        }
        window.onfocus = function() {
            document.title = currentTitle;
        }
    };

    _Blog.toggleTheme = function() {
        const currentTheme = window.localStorage && window.localStorage.getItem('theme')
        const isDark = currentTheme === 'dark'
        $('body').toggleClass('dark-theme', isDark)
        this.toggleIcons();
        $('.theme-switch').on('click', () => {
            $('body').toggleClass('dark-theme')
            window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
                this.toggleIcons();
        })
    }

    // This section recolors certain icons depending on the theme, for maximum visibility
    _Blog.toggleIcons = function() {
        if (document.body.classList.contains('dark-theme')) {
            // Dark theme
            document.getElementById('twitchicon').style.stroke='rgb(200,165,264)';
            document.getElementById('twittericon').style.stroke='rgb(0,200,200)';
            document.getElementById('twittericon').style.fill='rgb(0,200,200)';
            document.getElementById('youtubeicon').style.stroke='rgb(255,255,255)';
        } else {
            // Light theme
            document.getElementById('twitchicon').style.stroke='rgb(100,65,164)';
            document.getElementById('twittericon').style.stroke='rgb(0,0,200)';
            document.getElementById('twittericon').style.fill='rgb(0,0,200)';
            document.getElementById('youtubeicon').style.stroke='rgb(255,0,0)';
        }
    }

    _Blog.toggleMobileMenu = function() {
        $('.menu-toggle').on('click', () => {
            $('.menu-toggle').toggleClass('active')
            $('#mobile-menu').toggleClass('active')
        })
    }

    $(document).ready(function() {       
        _Blog.changeTitle();
        _Blog.toggleTheme();
        _Blog.toggleMobileMenu();
    });
});