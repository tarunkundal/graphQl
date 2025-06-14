const fetchGreetings = async () => {
    try {
        const response = await fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        greeting,
                        user {
                            name
                            age
                            title
                            isActive
                        }
                    }
                `
            })
        }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.greetings;
    } catch (error) {
        console.error('Error fetching greetings:', error);
        return [];
    }
}
fetchGreetings()