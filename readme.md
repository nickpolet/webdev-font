# webdev-font

![Header Image](assets/img/header.svg?raw=true)

Icon font for popular web frameworks and web related technologies. 


## [Show me the icons](http://nickpolet.github.io/webdev-font/)


# Getting Started

#### Using a CDN
To get started quickly, paste the following snippet within the head tag of your .html file

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nickpolet/webdev-font/dist/webdev-font.min.css">


#### Going DIY
If you would like to manually include the font in your project, [download the project](https://github.com/nickpolet/webdev-font/archive/master.zip) and place the "dist" folder somewhere accessible to your html code. You can then link the to the css file using the standard...

    <link rel="stylesheet" href="/path/to/dist/webdev-font.min.css">


# Usage

If you've used font-awesome or one of the many font icon sets out there, then you find this very simple (just replace "fa" with "wd"). It uses the following syntax to display the icons,

    <i class="wd wd-angular"></i>
    <i class="wd wd-phoenix"></i>
    <i class="wd wd-meteor"></i>
    <i class="wd wd-laravel"></i>
    etc...


# Icon Suggestions

If you would like to see a new icon included in the set, please create an issue on github. I will be happy to consider adding any icon that fits within the general theme of general web development.


# Adding your own icons

First of all, we'll need to clone this git repository with

    git clone https://github.com/nickpolet/webdev-font.git

Then we'll need to install the javascript dependancies.

    yarn install

Add your own icons into the assets/icons folder. At the moment, these need to be SVG files, with the canvas set to 1000 x 1000px. You can use inkscape or any other vector graphics program to create these.

Once you've added in any icons, run 

    yarn run build

The generated CSS and font files will be available into the 'dist' folder. There is also a 'webdev-font.html' file which is this the same as this page, but with any updated icons.


#### Happy Developing