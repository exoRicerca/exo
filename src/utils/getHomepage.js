import * as Scrivito from 'scrivito';

function getHomepage() {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) { return; }

  const path = currentPage.path();
  let language = '/lang/it';
  if (!path) {
    return Scrivito.Obj.getByPath(language);
  } 
  
  if (path.startsWith('/lang/')) {
    language = path.substr(0, 8);
  }
  return Scrivito.Obj.getByPath(language);
}

export default getHomepage;