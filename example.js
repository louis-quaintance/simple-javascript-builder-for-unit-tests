/** Outer container */
function ExampleBuilder() {
    this.model = {};
}

ExampleBuilder.prototype.withTitle = function(title) {
    this.model.title = title;
    return this;
};

ExampleBuilder.prototype.withName = function(name) {
    this.model.name = name;
    return this;
};

ExampleBuilder.prototype.build = function() {
    return this.model;
};

exports.anExampleBuilder = function() {
    return new ExampleBuilder();
};
