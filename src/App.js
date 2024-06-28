import './App.css';
import { DiscordNavBarProject } from './Projects/DiscordInspiredNavbar/discord-nav.project';
import { SmithNavComponent } from './Components/smith-nav/smith-nav.component';
import { ProjectsPage } from './Components/projects-page/projects.page';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './Components/about-page/about.component';

function App() {
  return (
    <div className="App">
      <nav>
        <SmithNavComponent />
        <Routes>
         <Route path='/' element={<ProjectsPage />} />
         <Route path='/about-page' element={<AboutPage />} />
         <Route path='/discord-navbar' element={<DiscordNavBarProject />} />
       </Routes>
      </nav>
    </div>
  );
}

export default App;
