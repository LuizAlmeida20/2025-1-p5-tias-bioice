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

**Atividade 1 : Recebimento de insumos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| nome_insumo | Caixa de texto	  |  obrigatório              |                   |
| data_validade  |  Data                |    formato dd-mm-aaaa	            |                   |
| quantidade	           | Número   | mínimo 1	 |                |
| fornecedor          | Caixa de texto   | obrigatório	 |           |
| **Comandos**         |  **Destino**                   | **Tipo** |
| registrar               | Armazenamento no sistema	              | default           |


**Atividade 2 : Armazenamento com etiquetagem**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| local_armazenamento	 | Seleção única		  |  câmara fria / estoque seco              |  gerada pelo sistema                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| salvar               | Registro de estoque	              | default           |


**Atividade 3: Verificação periódica de validade**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| data_verificação	 |Data		  |  formato dd-mm-aaaa	              |  atual                 |
| insumos_verificados		 |Área de texto			  |  obrigatório	              |                  |
| observações	 |Área de texto		  |  opcional	              |                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| atualizar               | Atualização do status	              | default           |


**Atividade 4 : Notificação e retirada de insumos vencidos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| insumo_vencido	 |Caixa de texto			  |  obrigatório	              |                |
| data_retirada		 |Data			  | formato dd-mm-aaaa              |   atual               |
| responsável_retirada		 |Caixa de texto			  |  obrigatório	              |                 |
| **Comandos**         |  **Destino**                   | **Tipo** |
| registrar              | Relatório de vencimentos	              | default           |
