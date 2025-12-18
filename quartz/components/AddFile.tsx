import { QuartzComponent } from "./types"

const AddFile: QuartzComponent = () => {
  const handleAddFileClick = () => {
    alert("添加文件功能已触发！ 要添加新文件到网站，请： 1. 在本地的content目录中创建.md文件 2. 或者使用sync-notes.ps1脚本从Obsidian导入 3. 重新构建并部署网站");
  };

  return (
    <div class="add-file-container">
      <button id="add-file-button" onClick={handleAddFileClick}>
        添加文件
      </button>
    </div>
  )
}

export default AddFile