import Article from "./article";
import Sugestions from "./sugested";
import Sidebar from "./sidebar";

class Server {
  getArticle() {
    return Article;
  }
  getSugestions() {
    return Sugestions;
  }
  getSidebar() {
    return Sidebar;
  }
}

export default new Server();
