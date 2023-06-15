FROM python:3.10

ENV PYTHONUNBUFFERED 1

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
RUN rustup default stable

RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN pip install -r requirements.txt


EXPOSE 8000

# Run the Django application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]