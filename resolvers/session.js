module.exports = {
    async speakers (session, args, { dataSources }) {
        const speakers = await dataSources.speakerAPI.getSpeakers();
        // console.log('SIMON19', speakers.length);
        // console.log('SIMON20', session);
        // const filteredSpeakers = speakers.filter(
        //     ({id}) => session.speakers.filter(({id : sessionSpeakerId}) =>  sessionSpeakerId === id).length > 0
        // );
        const filteredSpeakers = speakers.filter(
            ({id}) => session.speakers.some(({id : sessionSpeakerId}) =>  sessionSpeakerId === id)
        );
        //console.log('SIMON24', filteredSpeakers);
        return filteredSpeakers;

    }
};