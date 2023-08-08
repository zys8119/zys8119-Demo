declare global{
    interface PASSWORDCREDENTIAL {
        new (options:Options):Credential
    }
    interface FederatedCredential {
        new (options:Options):Credential
    }
    interface Options {
        id:string
        name:string
        password:string
    }
    const PasswordCredential:PASSWORDCREDENTIAL
    interface Window {
        $webAutoDeploy():void
        PasswordCredential:PASSWORDCREDENTIAL
        FederatedCredential:FederatedCredential
    }
    interface CredentialsContainer {
        get(options?:CredentialRequestOptions):Promise<Credential>
        get(options?: {
            password:boolean
            federated:any
            mediation:CredentialMediationRequirement
        }):Promise<Credential>
    }
}

export {}
