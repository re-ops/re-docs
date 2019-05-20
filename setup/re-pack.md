# Re-pack

Re-pack contains a collection of packer templates for creating Re-core ready images for AWS, Digitalocean, KVM and LXD.

## Build

Make sure to install the latest [Packer](https://www.packer.io/) version first:

```bash
# Build Ubuntu 18.04 AMI
$ packer build -var 'aws_access_key=<access-key>' -var 'aws_secret_key=<secret-key>' src/aws/ubuntu-18.04/template.json

# Build ubuntu 18.04 Digitalocean image
$ packer build -var 'api_token=<your token>' src/digital/ubuntu-18.04/template.json

# Build ubuntu 18.04 KVM image (use -var iso_url=/path/to/iso if you have pre-downloaded iso)
$ packer build -var 'user=<your user>' -var 'password=<your pass>' src/kvm/ubuntu-18.04/ubuntu-18.04-server-amd64.json

# Build ubuntu 18.04 LXD container
$ packer build -var 'user=<your user>' src/lxd/ubuntu-18.04/ubuntu-18.04-server-amd64.json

# Build an XFCE desktop varient
$ packer build -var 'user=<your user>' -var 'password=<your pass>' src/kvm/ubuntu-18.04/ubuntu-18.04-desktop-amd64.json
```
## Deploy
We need to copy our templates when creating KVM images, we do so by:

```bash
$ cp output/*.img /var/lib/libvirt/images/
```

Once that done create a new VM instance from the IMG file we just copied:

 ![kvm-template](../img/template.png)

This VM instance will be the source template from which new VM instances are created.

Note:
* Make sure to add a bridged networking interface in addition to the NAT interface it already has.
* Re-core uses the following naming convention for images/templates {os-name}-{os-version}_name-{version}.