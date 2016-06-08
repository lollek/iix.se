(function() {
    'use strict';

    var app = angular.module('main', []);

    app.controller('NotesController', function() {
       this.posts = note_posts;
    });

    var note_posts = [
        {
            href: "/notes/2016-03-24-awk.html",
            date: "24 Mar 2016",
            title: "Awk",
        },
        {
            href: "/notes/2016-01-14-installing_spamassassin.html",
            date: "14 Jan 2016",
            title: "Installing Spamassassin",
        },
        {
            href: "/notes/2016-01-14-installing_postfix_greylisting.html",
            date: "14 Jan 2016",
            title: "Installing Postfix Greylisting",
        },
        {
            href: "/notes/2016-01-14-installing_postfix.html",
            date: "14 Jan 2016",
            title: "Installing Postfix on System",
        },
        {
            href: "/notes/2016-01-14-installing_nfs_server.html",
            date: "14 Jan 2016",
            title: "Installing NFS Server",
        },
        {
            href: "/notes/2016-01-14-installing_courier.html",
            date: "14 Jan 2016",
            title: "Installing Courier",
        },
        {
            href: "/notes/2016-01-14-installing_automount_ldap.html",
            date: "14 Jan 2016",
            title: "Installing Automount on System (using LDAP)",
        },
        {
            href: "/notes/2016-01-14-configuring_spf.html",
            date: "14 Jan 2016",
            title: "Configuring SPF",
        },
        {
            href: "/notes/2015-10-20-expect_ssh_login.html",
            date: "20 Oct 2015</",
            title: "Expecting ssh login",
        },
        {
            href: "/notes/2015-10-02-static_wlan0.html",
            date: "02 Oct 2015",
            title: "Configure static wlan0 in /etc/network/interfaces",
        },
        {
            href: "/notes/2015-10-02-static_eth0.html",
            date: "02 Oct 2015",
            title: "Configure static eth0 in /etc/network/interfaces",
        },
        {
            href: "/notes/2015-10-02-postfix_disable_ipv6.html",
            date: "02 Oct 2015",
            title: "Postfix Address Family Not Supported",
        },
        {
            href: "/notes/2015-09-30-install_ldap.html",
            date: "30 Sep 2015",
            title: "Install and configure LDAP on server",
        },
        {
            href: "/notes/2015-09-30-attach_ldap.html",
            date: "30 Sep 2015",
            title: "Attach to LDAP on server",
        },
        {
            href: "/notes/2015-09-26-install-quagga-rip.html",
            date: "26 Sep 2015",
            title: "Configure Quagga with RIP",
        },
        {
            href: "/notes/2015-09-26-install-dns.html",
            date: "26 Sep 2015",
            title: "Install and Configure DNS",
        },
        {
            href: "/notes/2015-04-27-smb.conf.html",
            date: "27 Apr 2015",
            title: "smb.conf",
        },
        {
            href: "/notes/2015-04-15-usb-hid.html",
            date: "15 Apr 2015",
            title: "USBHID on Linux",
        },
        {
            href: "/notes/2015-03-24-chromium.html",
            date: "24 Mar 2015",
            title: "Cannot click and drag in Chrome/Chromium when running inside a virtualbox",
        },
        {
            href: "/notes/2015-03-21-teamspeak3-server.html",
            date: "21 Mar 2015",
            title: "Setup Teamspeak3 Server",
        },
        {
            href: "/notes/2015-03-19-git.html",
            date: "19 Mar 2015",
            title: "Generic Git Stuff",
        },
        {
            href: "/notes/2014-11-04-makepkg.html",
            date: "04 Nov 2014",
            title: "Archlinux Makepkg / Installing from AUR",
        },
        {
            href: "/notes/2014-10-28-mongodb.html",
            date: "28 Oct 2014",
            title: "Generic Mongodb Usage",
        },
        {
            href: "/notes/2014-10-28-crazykamo.html",
            date: "28 Oct 2014",
            title: "Crazykamo.js",
        },
        {
            href: "/notes/2014-10-27-building-debian-files.html",
            date: "27 Oct 2014",
            title: "Building Debian files",
        },
        {
            href: "/notes/2014-10-27-LaTeX.html",
            date: "27 Oct 2014",
            title: "LaTeX Template",
        },
        {
            href: "/notes/2014-10-27-BSD-ports.html",
            date: "27 Oct 2014",
            title: "BSD Ports",
        },
        {
            href: "/notes/2014-09-17-android-studio.html",
            date: "17 Sep 2014",
            title: "Android Studio Installation",
        },
        {
            href: "/notes/2014-09-17-android-studio-fix-questionmark.html",
            date: "17 Sep 2014",
            title: "Android Studio Questionmark Instead of Phone Name",
        },
        {
            href: "/notes/2014-09-11-sendmail.html",
            date: "11 Sep 2014",
            title: "Testing Sendmail",
        },
        {
            href: "/notes/2014-09-11-sendmail-starttls.html",
            date: "11 Sep 2014",
            title: "Sendmail @ FreeBSD - Activating SMTP AUTH (PLAIN) through STARTLS",
        },
        {
            href: "/notes/2014-09-05-fix-ubuntu-x11.html",
            date: "05 Sep 2014",
            title: "Fix Ubuntu X11",
        },
        {
            href: "/notes/2014-08-29-syscalls.html",
            date: "29 Aug 2014",
            title: "Syscalls",
        },
        {
            href: "/notes/2014-08-29-mysql.html",
            date: "29 Aug 2014",
            title: "Generic MYSQL Usage",
        },
        {
            href: "/notes/2014-08-28-ssh_config.html",
            date: "28 Aug 2014",
            title: ".ssh/config",
        },
        {
            href: "/notes/2014-08-28-ssh.html",
            date: "28 Aug 2014",
            title: "SSH Agent",
        },
        {
            href: "/notes/2014-08-28-cli.html",
            date: "28 Aug 2014",
            title: "Command Line Interface",
        },
        {
            href: "/notes/2014-08-28-c.html",
            date: "28 Aug 2014",
            title: "C Programming",
        },
        {
            href: "/notes/2014-08-28-bash.html",
            date: "28 Aug 2014",
            title: "Bash",
        },
        {
            href: "/notes/2014-01-07-hterm-crosh.html",
            date: "07 Jan 2014",
            title: "Crosh / HTerm",
        },
        {
            href: "/notes/2013-12-30-postfix.html",
            date: "30 Dec 2013",
            title: "Old OpenBSD Postfix main.cf",
        },
        {
            href: "/notes/2013-10-29-pae-error-on-boot.html",
            date: "29 Oct 2013",
            title: "PAE Error on boot",
        },
        {
            href: "/notes/2013-04-11-installing-spotify-on-linux.html",
            date: "11 Apr 2013",
            title: "Installing Spotify on Linux",
        },
    ];
})();