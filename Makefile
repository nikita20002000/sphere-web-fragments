# Имя репозитория
REPO_NAME = sphere-web-fragments
BRANCH = deploy-pages

# Установить зависимости (только если нужно)
install:
	@echo "Installing dependencies..."
	npm install

# Линтинг кода
lint:
	@echo "Linting the code..."
	npm run lint

# Сборка проекта
build:
	@echo "Building the project..."
	npm run build

# Удалить предыдущую сборку
clean:
	@echo "Cleaning previous build..."
	rm -rf dist

# Деплой на GitHub Pages
deploy: clean build
	@echo "Deploying to GitHub Pages..."
	   deploy:
       	npx gh-pages -d dist --branch deploy-pages --repo "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

# Полный процесс: установка, линтинг, сборка и деплой
all: install lint deploy