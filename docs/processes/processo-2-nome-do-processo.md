### 3.3.2 Processo 2 – Controle de Validade
 
Oportunidades de Melhoria:

- Implantar um sistema digital de controle de validade com notificações automáticas.

- Criar uma rotina padronizada para conferência periódica dos insumos.

- Capacitar os funcionários para realizar a checagem com maior agilidade e precisão.

- Estabelecer etiquetas padronizadas com data de validade e data de abertura do insumo.

- Automatizar alertas para insumos próximos do vencimento.

- Reduzir o desperdício com o uso inteligente do estoque (FIFO – First In, First Out).

![Exemplo de um Modelo BPMN do PROCESSO 2](../images/process.png "Modelo BPMN do Processo 2.")


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_

**Atividade 1 : Recebimento de insumos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| nome_insumo | Caixa de texto	  |  obrigatório              |                   |
| data_validade  |  Data                |    formato dd-mm-aaaa	            |                   |
| quantidade	           | Número   | mínimo 1	 |                |
| fornecedor          | Caixa de texto   | obrigatório	 |           |
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| registrar               | Armazenamento no sistema	              | default           |


**Atividade 2 : Armazenamento com etiquetagem**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| local_armazenamento	 | Seleção única		  |  câmara fria / estoque seco              |  gerada pelo sistema                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| salvar               | Registro de estoque	              | default           |


**Atividade 3: Verificação periódica de validade**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| data_verificação	 |Data		  |  formato dd-mm-aaaa	              |  atual                 |
| insumos_verificados		 |Área de texto			  |  obrigatório	              |                  |
| observações	 |Área de texto		  |  opcional	              |                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| atualizar               | Atualização do status	              | default           |


**Atividade 4 : Notificação e retirada de insumos vencidos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| insumo_vencido	 |Caixa de texto			  |  obrigatório	              |                |
| data_retirada		 |Data			  | formato dd-mm-aaaa              |   atual               |
| responsável_retirada		 |Caixa de texto			  |  obrigatório	              |                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| registrar              | Relatório de vencimentos	              | default           |
