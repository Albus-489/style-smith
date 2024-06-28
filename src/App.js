import './App.css';
import { DiscordNavBarProject } from './Projects/DiscordInspiredNavbar/discord-nav.project';
import { SmithNavComponent } from './Components/smith-nav/smith-nav.component';
import { ProjectsPage } from './Components/projects-page/projects.page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <SmithNavComponent />
        <Routes>
         <Route path='/' element={<ProjectsPage />} />
         <Route path='/discord-navbar' element={<DiscordNavBarProject />} />
       </Routes>
      </nav>
    </div>
  );
}

export default App;
