@echo off
chcp 65001 >nul
echo ========================================================
echo   正在将魔塔项目推送到 GitHub:
echo   https://github.com/Sliccic/magic-tower.git
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
pause
