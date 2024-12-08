FROM eclipse-temurin:21-jdk-alpine AS build
ENV HOME=/usr/app
RUN mkdir -p "$HOME"
WORKDIR $HOME
COPY . $HOME
RUN --mount=type=cache,target=/root/.m2 ./mvnw -f "$HOME"/pom.xml clean package

FROM eclipse-temurin:21-jdk-alpine
LABEL authors="opax, garnplak"
ARG JAR_FILE=/usr/app/target/*.jar
COPY --from=build $JAR_FILE /app/backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/backend.jar"]