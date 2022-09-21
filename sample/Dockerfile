FROM ruby:2.7.0

RUN useradd -u 1000 app; \
    mkdir -p /home/app/app; \
    chown app.app -R /home/app

WORKDIR /home/app/app

RUN gem update --system; \
    gem install bundler:2.3.15 --default; \
    chown app.app /usr/local/bundle -R

COPY --chown=app:app source/* /home/app/app/

USER app
RUN bundle install
