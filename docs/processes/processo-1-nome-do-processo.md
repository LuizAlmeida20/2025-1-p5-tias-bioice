### 3.3.1 Processo 1 – Controle de Descarte

#### Oportunidades de Melhoria:
- Implementar coleta seletiva no salão da loja.

- Treinar funcionários para orientar os clientes sobre descarte correto.

- Criar um sistema simples para registrar os tipos de resíduos descartados.

- Estimular clientes externos a descartarem corretamente, por meio de panfletos e recompensas.

- Criar parcerias com cooperativas de reciclagem.

- Conscientizar a comunidade sobre sustentabilidade.
 
![Exemplo de um Modelo BPMN do PROCESSO 1](../images/process.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades




**Cliente consome produto**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| tipo_consumo           | Seleção única   | local / externo |   local             |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| confirmar               | Identifica tipo de consumo	              | default           |



**Cliente descarta embalagem**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| tipo_material	 | Seleção única	  |  	plástico, papel, orgânico, outros              |                   |
|  imagem_do_resíduo	               |  Imagem                |       opcional         |                   |
|  data_descarte	               |  Data                |       formato dd-mm-aaaa	         |                   |
|  hora_descarte	               |  Hora                |       formato hh:mm:ss		         |                   |
| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| registrar | Funcionário realiza triagem  | default |


**Funcionário realiza triagem e separa recicláveis**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| material_reciclável	 | Seleção múltipla		  |  	papel, plástico, alumínio,isopor              |                   |
|  quantidade               |  Número                |      mínimo 1	        |                   |
|  observações	               |  Área de texto	                |       opcional		         |                   |
| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| salvar | Registro do descarte	  | default |


**Registro do descarte no sistema**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| data_hora_registro	 | Data e Hora			  |  automático              |   atual                |
|  responsável              | Caixa de texto	                |     obrigatório		        |                   |
|  observações	               |  Área de texto	                |       opcional		         |                   |
| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| finalizar	 | Fim do processo		  | default |
