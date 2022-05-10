# BankingSLS
Serverless Banking App + JavaScript + Hexagonal Architecture
## Instalar serverless vía nodejs
``` bash
npm i -g serverless
```

## Configurar credenciales
``` bash
sls config credentials --provider aws --key <key> --secret <secret>
# Agregar -o para overwrite
```

## Crear proyecto serverless
``` bash
sls create --template aws-nodejs --path <my_path> -n <name>
```

## Deploy
``` bash
sls deploy 
# Agregar --stage <stage_name>, por defecto es 'dev'
```

## Eliminar deploy
``` bash
sls remove
```

## Serverless offline
instalar serverless offline
``` bash
npm i --save-dev serverless-offline
```
agregar en serverless.yml
``` code
plugins:
    - serverless-offline
```
ejecutar
``` bash
sls offline
```