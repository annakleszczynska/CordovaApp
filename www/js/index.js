var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        angular.element(document).ready(function () {
            angular.bootstrap(document.getElementById('myapp'), ['app']);
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function() {
        var listeningElement = document.getElementById('devicenotready');
        var receivedElement = document.getElementById('deviceready');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();
