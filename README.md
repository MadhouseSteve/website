# Madhouse Miners Website

This is the repo that contains the full stack for the Madhouse Miners website.

This includes the following:

* React based static website
* Docker files for building and development

## Development

In order to develop on this system you can run:

`docker-compose up`

This will start the docker containers, with volumes mounted and file watchers in place.

## Submitting Changes

If you make a change that you think should be in the core application, please open a pull request for review.

All changes will be run through SonarQube in order to validate code quality standards are met, and through the
DockerHub testing process to ensure containers will be created properly.

It may take some time to review the changes, but the repositories are linked up to the Madhouse Miners Discord server
so the devs will be notified of any new pull requests.

## Deploying to production

The live environment of choice for Madhouse is Kubernetes. As such the deployment directory is set up with the relevant
kubernetes information. If you need more information about how to deploy to a Kubernetes platform, you can find it over
in the [Kubernetes documentation](https://kubernetes.io/docs/home/), or hit us up on the Madhouse Discord server and we
can try to help.

