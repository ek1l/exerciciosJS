class Licenca {
  constructor(nome, sobrenome, dataNascimento) {
    if (
      typeof nome !== 'string' ||
      typeof sobrenome !== 'string' ||
      typeof dataNascimento !== 'string'
    ) {
      throw new Error(
        'Nome, sobrenome e data de nascimento devem ser strings.',
      );
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    if (this.sobrenome.length < 5) {
      throw new Error('Sobrenome deve ter pelo menos 5 caracteres.');
    }

    this.dataNascimento = dataNascimento;
    this.licencaVoo = false;
  }

  createLicenca() {
    if (!this.nome || !this.dataNascimento || !this.sobrenome) {
      throw new Error('Nome, sobrenome e data de nascimento são obrigatórios.');
    }

    let PilotFlyingLicense = '';

    for (let i = 0; i <= 4; i++) {
      PilotFlyingLicense += this.sobrenome[i].toUpperCase();
    }

    PilotFlyingLicense += '-';
    PilotFlyingLicense += this.dataNascimento[8];
    PilotFlyingLicense += this.dataNascimento[3];
    PilotFlyingLicense += this.dataNascimento[4];
    PilotFlyingLicense += this.dataNascimento.slice(9, 10) + '.';
    PilotFlyingLicense += this.nome[0].toLowerCase();

    this.licencaVoo = true;

    if (PilotFlyingLicense === '') {
      throw new Error('Falha ao gerar a licença.');
    }

    return {
      firstName: this.nome,
      lastName: this.sobrenome,
      birthday: this.dataNascimento,
      flyingLicense: PilotFlyingLicense,
    };
  }
}
