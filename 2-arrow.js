export default function FolderManager() {
    this.folders = ['Documents', 'Images'];
  
    this.addFolder = (newFolder) => {
      this.folders.push(newFolder);
      return this.folders;
    };
  }
  