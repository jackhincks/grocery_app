# This Dockerfile builds the Flask API only.

FROM python:3.12.5
WORKDIR /app

COPY . .
# This will cache the dependencies to speed up subsequent builds
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r ./requirements.txt

EXPOSE 5001
CMD ["python3", "run.py"]