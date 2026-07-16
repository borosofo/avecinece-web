#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/docker/avecinece-web"
cd "$APP_DIR"

BRANCH="$(git branch --show-current 2>/dev/null || true)"
if [ -z "$BRANCH" ]; then
  BRANCH="master"
fi

git fetch origin "$BRANCH" || true
git pull origin "$BRANCH" || true

docker compose up -d --build --remove-orphans
