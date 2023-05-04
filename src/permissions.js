import { AbilityBuilder } from '@casl/ability';

const { can, build } = new AbilityBuilder();

export const userAbilities = () => {
  can('read', 'UserPage');
  return build();
};

export const adminAbilities = () => {
  can('read', 'AdminPage');
  return build();
};