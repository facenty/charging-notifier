# Common build stage

FROM python:3 as common-build-stage
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY manage.py /app/
COPY . /app/
EXPOSE 8080


# Development build stage
FROM common-build-stage as development-build-stage

# ENV NODE_ENV development
RUN pwd
RUN ls -la /app

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080"]

# # Production build stage
# FROM common-build-stage as production-build-stage

# ENV NODE_ENV production

# CMD ["npm", "run", "start"]
