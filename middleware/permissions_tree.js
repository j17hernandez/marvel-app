
import setCaslPermissions from '~/mixins/casl.js'

export default function storePermissionsTree({ store, redirect }) {
  const permissions = {
    "modules": [
      {
        "Characters": {
          "components": [
            {
              "character": {
                "actions": [
                  "show",
                  "list",
                  "all"
                ]
              }
            }
          ]
        }
      }
    ]
  }
  setCaslPermissions(permissions)
}