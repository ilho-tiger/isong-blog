FROM golang:1.14-alpine as builder

RUN apk add --no-cache \
        git
WORKDIR /build
RUN git clone https://github.com/gohugoio/hugo.git \
    && cd hugo \
    && go install

# actual application
FROM alpine:3.12 as application

RUN apk add --no-cache --virtual .timezone \
        tzdata \
    && cp /usr/share/zoneinfo/America/New_York /etc/localtime \
    && echo "America/New_York" >  /etc/timezone \
    && apk del .timezone \
    && apk add --no-cache --virtual .op-deps \
        git openssh python3

ARG USER=isong
ENV HOME /home/${USER}/

# add new user 
RUN adduser -D ${USER} -s /bin/sh

# hugo command binary (build result from above)
COPY --from=builder /go/bin/hugo /usr/local/bin/hugo

USER ${USER}
WORKDIR ${HOME}

RUN mkdir -p ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
