import { AbilityBuilder, Ability } from '@casl/ability'

export default function defineAbilityFor(permissions) {
  const { can, build } = new AbilityBuilder(Ability);
  permissions = permissions.modules
  permissions.forEach((item, i) => {
    const moduleName = Object.keys(item)[0]
    const components = permissions[i][moduleName].components
    components.forEach((component, j) => {
      const componentCode = Object.keys(component)[0]
      const actions = components[j][componentCode].actions
      can(actions, componentCode)
    })
  })
  return build();
}