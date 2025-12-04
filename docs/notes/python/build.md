# Python 打包
## Flash 打包方案 1
```shell
# 安装PyInstaller：
pip install pyinstaller
pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple/

# 将项目依赖记录在 `requirements.txt`：
pip freeze > requirements.txt

# 下载requirements中的包
pip install -r requirements.txt

# 打包命令
pyinstaller --add-data "templates;templates" --add-data "static;static" --onefile app.py

**命令说明**：
--add-data "templates;templates"：将 templates 文件夹添加到打包文件中。
--add-data "static;static"：将 static 文件夹添加到打包文件中。
--onefile：生成单个可执行文件。
```

## Flash 打包方案 2
```shell
# 配置 PyInstaller 的 .spec 文件（可选）
# app.spec 文件
# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

a = Analysis(
    ['app.py'],
    pathex=[],
    binaries=[],
    datas=[
	    ('templates/*', 'templates'),
	    ('logs/*', 'logs'),
        ('templates', 'templates'),  # 添加模板文件
        ('static', 'static'),        # 添加静态文件
    ],
    hiddenimports=[],
    hookspath=[],
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)
exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='app',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=True,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='app',
)

# 运行打包
pyinstaller app.spec
```

```shell
### **扩展**
# 1. **添加图标**： 将 `--icon=app.ico` 添加到打包命令中。
# 2. **隐藏命令行窗口（仅 Windows）**： 在打包时添加 `--noconsole` 参数：
pyinstaller --onefile --noconsole --add-data "templates;templates" --add-data "static;static" app.py

# --onefile
# 只打包一个exe程序

# 这样运行时不会弹出命令行窗口。

# mouse_detect.exe --host_port 0.0.0.0:5022
```
