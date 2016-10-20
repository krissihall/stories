import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    epic: belongsTo('epic')
});
