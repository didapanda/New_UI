<template>
  <div class="page-parent">
    <h1 class="page-title ml-9">{{ $t('infos') }}</h1>
    <p class="page-subtitle ml-9 pl-1">{{ $t('infos_txt') }}</p>
<!-- example -->
    <div class="row">
      <div class="col-md-12">
        <h1>Web3modal vanilla JavaScript demo</h1>

        <p>
          No wallet connected. Connect wallet to show accounts and their ETH
          balances.
        </p>

        <div id="prepare">
          <button class="btn btn-primary" id="btn-connect">
            Connect wallet
          </button>
        </div>

        <div id="connected" style="display: none">
          <button class="btn btn-primary" id="btn-disconnect">
            Disconnect wallet
          </button>

          <hr />

          <div id="network">
            <p>
              <strong>Connected blockchain:</strong>
              <span id="network-name"></span>
            </p>

            <p>
              <strong>Selected account:</strong>
              <span id="selected-account"></span>
            </p>
          </div>

          <hr />

          <h3>All account balances</h3>

          <table class="table table-listing">
            <thead>
              <th>Address</th>
              <th>ETH balance</th>
            </thead>

            <tbody id="accounts"></tbody>
          </table>

          <p>
            Please try to switch between different accounts in your wallet if
            your wallet supports this functonality.
          </p>
        </div>
      </div>
    </div>
    <!-- We use simple <template> templating for the example -->
    <div id="templates" style="display: none">
      <div id="template-balance">
        <tr>
          <th class="address"></th>
          <td class="balance"></td>
        </tr>
      </div>
    </div>
    <!-- example -->
  </div>
</template>
