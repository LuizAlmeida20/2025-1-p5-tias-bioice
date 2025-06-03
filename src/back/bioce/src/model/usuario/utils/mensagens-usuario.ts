export class MensagensUsuario {
  static USUARIO_JA_EXISTE: string =
    'Já existe um usuário cadastrado na base dados com as informações fornecidas.';

  static USUARIO_NAO_EXISTE(name: string): string {
    return `O usuário de nome ${name} não existe na base de dados`;
  }
}
