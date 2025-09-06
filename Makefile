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
	npx gh-pages -d dist --branch $(BRANCH)

# Полный процесс: установка, линтинг, сборка и деплой
all: install lint deploy