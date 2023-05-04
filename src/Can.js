import { createContextualCan } from '@casl/react';
import { userAbilities, adminAbilities } from './permissions';

const Can = createContextualCan({
  user: userAbilities,
  admin: adminAbilities,
});

export default Can;