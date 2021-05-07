package ch.zuhlke.tetris.transport

import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import org.hamcrest.CoreMatchers.`is`
import org.junit.jupiter.api.Test

@QuarkusTest
class GameResourceTest {

    @Test
    fun testGetGameEndpoint() {
        given()
          .`when`().get("/game")
          .then()
             .statusCode(200)
             .body(`is`("[]"))
    }

}