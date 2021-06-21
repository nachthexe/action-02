FROM docker:stable
LABEL "repository"="https://github.com/exceeders/action-02"
LABEL "maintainer"="John Son"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
