 <template>
      <header class="hero">
        <div class="bar logo">
          <h3>CryptoTracker</h3>
        </div>
        <h1>Realtime displays of cryptocurrencies market prices</h1>
        <h2>Bitcoin, Ethereum, and Litecoin</h2>
      </header>
    </template>
    <script>
    export default { name: 'app' }
    </script>

    <style scoped>
    header {
        background: linear-gradient(to bottom right, rgb(0, 106, 193),rgb(50, 85, 95));
        padding: 1em;
        margin-bottom: 1em;
        text-align: center;
        height: 300px;
        color: #fff;
    }
    header h3 {
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        float: left;
    }
    bar { padding: 20px; height: 48px; }
    .monitor{
        text-transform: uppercase;
        float:right;
        background-color: rgba(255, 255, 255, 0.2);
        line-height: 23px;
        border-radius: 25px;
        width: 175px;
        height: 48px;
        margin: auto;
    }
    .monitor:hover, monitorText:hover { cursor:pointer; }
    .monitorText{
        width: 104px;
        height: 23px;
        font-weight: bold;
        line-height: 50px;
        font-size: 14px;
    }
    header h1 { padding-top: 80px; width: 80%; margin: auto; }
    header h2{ padding-top:20px; }
    </style>