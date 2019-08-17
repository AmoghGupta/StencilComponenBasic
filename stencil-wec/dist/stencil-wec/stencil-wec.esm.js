import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-2557cbd9.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["uc-side-drawer",[[1,"uc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]]], { resourcesUrl });
});
