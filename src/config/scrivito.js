import * as Scrivito from 'scrivito';

Scrivito.configure({
  homepage: () => Scrivito.Obj.getByPath('/lang/it'),
  tenant: process.env.SCRIVITO_TENANT,
});
