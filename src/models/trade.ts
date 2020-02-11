/**
 * class TradeModel. Interact with trade_activity db
 */
class TradeModel {
  /**
   * Class property set to an instance of PostGress Client
   *
   * @param {Object} PostGress Client
   * Instance of the PostGress Client
   */
  private client: any;
  constructor(client: any) {
    this.client = client;
  }

  /**
   * Calculates total gains for a given user
   * @param  {string} customer_id
   * User_id to query table
   */
  async totalGains(customer_id: any) {
    console.log("event", customer_id);
    const query = `SELECT SUM (gain_amount) AS total FROM trade_analysis WHERE customer_id = ${customer_id}`;
    // const total = await this.client.query(query);
    return {
      "user": [{
      }]
    }
  }
}

export default TradeModel;
