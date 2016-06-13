Basically, postfix was configured with ipv6 support when the OS does not provide
it

    Starting Postfix Mail Transport Agent: postfixpostmulti: warning:
    inet_protocols: disabling IPv6 name/address support: Address family not supported by protocol
    postmulti: warning: inet_protocols: disabling IPv6 name/address support: Address family not supported by protocol
    postfix: warning: inet_protocols: disabling IPv6 name/address support: Address family not supported by protocol

## Solution:

    sudo postconf -e 'inet_protocols = ipv4'
    sudo /etc/init.d/postfix restart
