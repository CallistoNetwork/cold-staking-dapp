(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/single-logo.73431e29.svg"},35:function(e,t,a){e.exports=a(89)},41:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),i=a(7),s=a.n(i),c=(a(41),a(2)),l=a.n(c),u=a(5),m=a(9),p=a(10),d=a(13),w=a(11),f=a(12),h=a(1),b=(a(46),a(64),a(69),a(14)),y=a.n(b),k=[{constant:!0,inputs:[],name:"CS_frozen",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TotalStakingWeight",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"StakingRewardPool",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"start_staking",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"DEBUG_donation",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"claim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"Treasury",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"staking_threshold",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"round_interval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"staker",outputs:[{name:"amount",type:"uint256"},{name:"time",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"DateStartStaking",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_addr",type:"address"}],name:"report_abuse",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"new_block",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"TotalStakingAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"LastBlock",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_f",type:"bool"}],name:"freeze",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_addr",type:"address"}],name:"stake_reward",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw_rewards",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdraw_stake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"max_delay",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"Timestamp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"clear_treasurer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"addr",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"StartStaking",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"staker",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"WithdrawStake",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"staker",type:"address"},{indexed:!1,name:"reward",type:"uint256"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_address",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"DonationDeposited",type:"event"}],v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={stakeConfirmation:!1},a.handleStake=function(e){e.preventDefault(),a.props.openStakeConfirmation()},a.submitStakeForm=function(e){e.preventDefault(),a.setState({stakeConfirmation:!0}),a.startStaking(e.target[0].value)},a.handleWithdraw=function(e){e.preventDefault(),a.props.openWithdrawConfirmation()},a.handleClaim=function(e){e.preventDefault(),a.props.openClaimConfirmation()},a.startStaking=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.web3,!window.ethereum&&!n.currentProvider){e.next=19;break}if(n=window.ethereum?new window.Web3(window.ethereum):new window.Web3(n.currentProvider),e.prev=3,!window.ethereum){e.next=7;break}return e.next=7,window.ethereum.enable();case 7:return e.next=9,n.eth.contract(k).at("0xd813419749b3c2cDc94A2F9Cfcf154113264a9d6");case 9:o=e.sent,r=Object(h.a)(Object(h.a)(a)),n.eth.getAccounts(function(e,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;r.setState({address:a[0]}),e?console.log(e):o.start_staking({from:a[0],gas:2e5,value:n.toWei(s)},function(e,t){e?console.log(e):i.setState({stakeConfirmation:!1},function(){return window.location.reload()})})}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:e.next=20;break;case 19:a.setError("Connection problems.");case 20:case"end":return e.stop()}},e,null,[[3,14]])}));return function(t){return e.apply(this,arguments)}}(),a.witdrawStake=Object(u.a)(l.a.mark(function e(){var t,n,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.web3,!window.ethereum&&!t.currentProvider){e.next=19;break}if(t=window.ethereum?new window.Web3(window.ethereum):new window.Web3(t.currentProvider),e.prev=3,!window.ethereum){e.next=7;break}return e.next=7,window.ethereum.enable();case 7:return e.next=9,t.eth.contract(k).at("0xd813419749b3c2cDc94A2F9Cfcf154113264a9d6");case 9:n=e.sent,o=Object(h.a)(Object(h.a)(a)),t.eth.getAccounts(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;o.setState({address:t[0]}),e?console.log(e):n.withdraw_stake({gas:2e5},function(e,t){e?console.log(e):a.setState({stakeConfirmation:!1},function(){return window.location.reload()})})}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:e.next=20;break;case 19:a.setError("Connection problems.");case 20:case"end":return e.stop()}},e,null,[[3,14]])})),a.clailReward=Object(u.a)(l.a.mark(function e(){var t,n,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.web3,!window.ethereum&&!t.currentProvider){e.next=19;break}if(t=window.ethereum?new window.Web3(window.ethereum):new window.Web3(t.currentProvider),e.prev=3,!window.ethereum){e.next=7;break}return e.next=7,window.ethereum.enable();case 7:return e.next=9,t.eth.contract(k).at("0xd813419749b3c2cDc94A2F9Cfcf154113264a9d6");case 9:n=e.sent,o=Object(h.a)(Object(h.a)(a)),t.eth.getAccounts(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;o.setState({address:t[0]}),e?console.log(e):n.claim({gas:2e5},function(e,t){e?console.log(e):a.setState({stakeConfirmation:!1},function(){return window.location.reload()})})}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:e.next=20;break;case 19:a.setError("Connection problems.");case 20:case"end":return e.stop()}},e,null,[[3,14]])})),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.balance,n=t.staked,o=t.reward;return r.a.createElement("div",null,r.a.createElement("div",{className:"App-content-head"},r.a.createElement("span",{className:"App-content-head-title"},"Account Balance"),r.a.createElement("span",{className:"App-content-head-title"},"Staking Balance"),r.a.createElement("span",{className:"App-content-head-title"},"Reward")),r.a.createElement("div",{className:"App-content-details"},r.a.createElement("span",{className:"App-content-head-title"},a.toLocaleString()," CLO"),r.a.createElement("span",{className:"App-content-head-title"},n.toLocaleString()," CLO"),r.a.createElement("span",{className:"App-content-head-title"},o.toLocaleString()," CLO")),r.a.createElement("div",{className:"App-content-btns"},r.a.createElement("div",null,r.a.createElement("a",{className:"btn-green",href:"#stake",onClick:this.handleStake},"Start Staking")),r.a.createElement("div",null,r.a.createElement("a",{className:"btn-green",href:"#withdraw",onClick:this.handleWithdraw},"Withdraw")),r.a.createElement("div",null,r.a.createElement("a",{className:"btn-green",href:"#claim",onClick:this.handleClaim},"Claim Reward"))),r.a.createElement(y.a,{open:this.props.stakeConfirmation,closeBtn:!0,closeOnEsc:!0,onClose:function(){return e.props.closeStakeConfirmation()},closeOnOverlay:!0,position:"centerCenter",className:"App-modal",contentStyle:{maxWidth:"350px",width:"100%",padding:"1rem"}},r.a.createElement("form",{className:"App-stakeForm",onSubmit:this.submitStakeForm},r.a.createElement("h3",{className:"App-stakeForm-title"},"How much will your stake be?"),n>0?r.a.createElement("p",{className:"App-stakeForm-subtitle warning"},"You already have funds in staking contract. You will lose your staking reward if you make a new deposit into the contract. You should withdraw your staking reward first or use a another account for a new staking deposit."):null,r.a.createElement("p",{className:"App-stakeForm-subtitle"},"Your funds will be locked for 27 days and you will be unable to withdraw within the locking period"),r.a.createElement("input",{className:"App-stakeForm-input",name:"amountToStake",type:"number",min:0,placeholder:"Amount to stake",required:!0}),this.state.stakeConfirmation?r.a.createElement("input",{className:"App-stakeForm-submit btn-green",value:"Stake now!",type:"submit"}):r.a.createElement("div",{className:"App-stakeForm-confirmation"},r.a.createElement("p",{className:"App-stakeForm-message"},"Are you sure ?"),r.a.createElement("div",{className:"App-stakeForm-confirmation-content"},r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#stakeConfirmation",onClick:function(){return e.setState({stakeConfirmation:!0})}}," Yes, of course "),r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#cancelStake",onClick:function(){e.setState({stakeConfirmation:!1}),e.props.closeStakeConfirmation()}}," No "))))),r.a.createElement(y.a,{open:this.props.withdrawConfirmation,closeBtn:!0,closeOnEsc:!0,onClose:function(){return e.props.closeWithdrawConfirmation()},closeOnOverlay:!0,position:"centerCenter",className:"App-modal",contentStyle:{maxWidth:"350px",width:"100%",padding:"1rem"}},r.a.createElement("div",{className:"App-stakeForm"},r.a.createElement("h3",{className:"App-stakeForm-title"},"Do you wanna withdraw all your staked CLO's ?"),r.a.createElement("p",{className:"App-stakeForm-subtitle"},"You will withdraw from the staking contract"),r.a.createElement("div",{className:"App-stakeForm-confirmation-content"},r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#confirmWithdraw",onClick:function(){e.witdrawStake()}}," Yes, i'm sure "),r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#cancelWithdraw",onClick:function(){e.setState({stakeConfirmation:!1}),e.props.closeWithdrawConfirmation()}}," No ")))),r.a.createElement(y.a,{open:this.props.claimConfirmation,closeBtn:!0,closeOnEsc:!0,onClose:function(){return e.props.closeClaimConfirmation()},closeOnOverlay:!0,position:"centerCenter",className:"App-modal",contentStyle:{maxWidth:"350px",width:"100%",padding:"1rem"}},r.a.createElement("div",{className:"App-stakeForm"},r.a.createElement("h3",{className:"App-stakeForm-title"},"Do you wanna claim your rewards?"),r.a.createElement("p",{className:"App-stakeForm-subtitle"},"After claiming the reward, your funds will be frozen for the next 27 days and you will be unable to claim new reward OR withdraw your funds during this period."),r.a.createElement("div",{className:"App-stakeForm-confirmation-content"},r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#confirmClaim",onClick:function(){e.clailReward()}}," Yes, i'm sure "),r.a.createElement("a",{className:"App-stakeForm-submit btn-green",href:"#cancelClaim",onClick:function(){e.setState({stakeConfirmation:!1}),e.props.closeClaimConfirmation()}}," No ")))))}}]),t}(o.Component),C=(a(85),function(e){var t=e.progress;return r.a.createElement("div",{className:"ProgressBar"},r.a.createElement("span",null,"Staking round progress"),r.a.createElement("div",{className:"ProgressBar-content"},r.a.createElement("span",{className:"ProgressBar-number"},t>100?0:t,"%"),r.a.createElement("div",{className:"ProgressBar-line",style:{width:"".concat(t>100?0:t,"%")}})))}),g=a(34),E=a.n(g),S=(a(87),function(e){function t(){var e,a;Object(m.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={stakeConfirmation:!1,withdrawConfirmation:!1,claimConfirmation:!1,error:"",address:"",balance:0,onStaking:0,reward:0,roundInterval:27,daysPassed:0,conectionError:0,NodeConnected:!1},a.openStakeConfirmation=function(){a.setState({stakeConfirmation:!0})},a.closeStakeConfirmation=function(){a.setState({stakeConfirmation:!1})},a.openWithdrawConfirmation=function(){a.setState({withdrawConfirmation:!0})},a.closeWithdrawConfirmation=function(){a.setState({withdrawConfirmation:!1})},a.openClaimConfirmation=function(){a.setState({claimConfirmation:!0})},a.closeClaimConfirmation=function(){a.setState({claimConfirmation:!1})},a.daysPassed=function(e){var t=new Date,a=Math.abs(t.getTime()-e.getTime());return Math.floor(a/864e5)},a.setError=function(e){return a.setState({error:e})},a.connectNode=Object(u.a)(l.a.mark(function e(){var t,o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.web3,!window.ethereum&&!t.currentProvider){e.next=19;break}if(t=window.ethereum?new window.Web3(window.ethereum):new window.Web3(t.currentProvider),e.prev=3,!window.ethereum){e.next=7;break}return e.next=7,window.ethereum.enable();case 7:return e.next=9,t.eth.contract(k).at("0xd813419749b3c2cDc94A2F9Cfcf154113264a9d6");case 9:o=e.sent,r=Object(h.a)(Object(h.a)(a)),t.eth.getAccounts(function(e,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;r.setState({address:a[0]}),e?console.log(e):(clearInterval(n),i.setError(""),o.round_interval(function(e,t){e?console.log(e):i.setState({roundInterval:t/86400})}),o.staker(a[0],function(e,a){e?console.log(e):i.setState({onStaking:t.fromWei(a[0]),daysPassed:i.daysPassed(new Date(1e3*a[1].toNumber()))})}),o.stake_reward(a[0],function(e,a){e?console.log(e):i.setState({reward:t.fromWei(a).toFixed(3)})}),t.eth.getBalance(a[0],function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;!e&&a?n.setState({balance:t.fromWei(a).toFixed(3)}):console.log(e)}))}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:e.next=20;break;case 19:a.setState({conectionError:a.state.conectionError+1});case 20:case"end":return e.stop()}},e,null,[[3,14]])})),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){n=setInterval(this.connectNode,1e3),this.setError("Connecting to Callisto network")}},{key:"componentDidUpdate",value:function(){this.state.NodeConnected?clearInterval(n):this.state.conectionError>5&&"Connecting to Callisto network"===this.state.error&&(clearInterval(n),this.setError("Error conecting callisto network"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-container"},r.a.createElement("div",{className:"App-container-logos"},r.a.createElement("a",{target:"_blank",href:"https://callisto.network",rel:"noopener noreferrer"},r.a.createElement("figure",{className:"App-container-figure"},r.a.createElement("img",{src:E.a,alt:"Clo logo"})))),r.a.createElement("div",null,this.state.address?r.a.createElement("div",{className:"App-address"},"You are connected to address: ",r.a.createElement("br",null),r.a.createElement("strong",null,this.state.address)):null),r.a.createElement("div",{className:"App-content square"},r.a.createElement(v,{balance:this.state.balance,staked:this.state.onStaking,reward:this.state.reward,openStakeConfirmation:this.openStakeConfirmation,closeStakeConfirmation:this.closeStakeConfirmation,stakeConfirmation:this.state.stakeConfirmation,openWithdrawConfirmation:this.openWithdrawConfirmation,closeWithdrawConfirmation:this.closeWithdrawConfirmation,withdrawConfirmation:this.state.withdrawConfirmation,openClaimConfirmation:this.openClaimConfirmation,closeClaimConfirmation:this.closeClaimConfirmation,claimConfirmation:this.state.claimConfirmation,daysPassed:this.state.daysPassed,roundInterval:this.state.roundInterval}),r.a.createElement(C,{progress:0===this.state.roundInterval?0:(100*this.state.daysPassed/this.state.roundInterval).toFixed(0)}),this.state.error?r.a.createElement("div",{className:"App-error"},"Connecting to Callisto network"===this.state.error?r.a.createElement("span",{className:"App-orange-text"},this.state.error):r.a.createElement("span",{className:"App-error-text"},this.state.error)):null)))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.27cca5c9.chunk.js.map