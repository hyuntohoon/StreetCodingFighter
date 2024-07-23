package com.scf.multi.domain.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.scf.multi.domain.model.MultiGameRoom;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MultiGameRepositoryTest {

    private MultiGameRepository repository;
    private MultiGameRoom gameRoom;

    @BeforeEach
    void setUp() {
        repository = new MultiGameRepository();
        gameRoom = MultiGameRoom.builder()
            .roomId("abc-def")
            .hostId(1L)
            .isStart(false)
            .round(0)
            .maxPlayer(2)
            .password("1234")
            .build();
    }

    @Test
    @DisplayName("방이 정상적으로 추가되어야 한다.")
    void AddRoomTest() {

        // when
        repository.addRoom(gameRoom);

        MultiGameRoom room = repository.findOneById("abc-def");

        // then
        assertNotNull(room);
        assertEquals("abc-def", room.getRoomId());
    }

    @Test
    @DisplayName("방의 목록을 정상적으로 반환해야 한다.")
    void FindAllRoomsTest() {

        // given
        MultiGameRoom anotherRoom = MultiGameRoom.builder()
            .roomId("room2")
            .hostId(2L)
            .isStart(false)
            .round(0)
            .maxPlayer(2)
            .password("1234")
            .build();

        repository.addRoom(gameRoom);
        repository.addRoom(anotherRoom);

        //when
        List<MultiGameRoom> rooms = repository.findAllRooms();

        // then
        assertEquals(2, rooms.size());
        assertTrue(rooms.contains(gameRoom));
        assertTrue(rooms.contains(anotherRoom));
    }

    @Test
    @DisplayName("roomId에 해당하는 방을 정상적으로 반환해야 한다.")
    void FindOneByIdTest() {

        // given
        repository.addRoom(gameRoom);

        // when
        MultiGameRoom room = repository.findOneById("abc-def");

        // then
        assertNotNull(room);
        assertEquals("abc-def", room.getRoomId());
    }

    @Test
    @DisplayName("roomId에 해당하는 방을 정상적으로 삭제해야 한다.")
    void DeleteRoomTest() {

        // given
        repository.addRoom(gameRoom);

        // when
        repository.deleteRoom("abc-def");
        MultiGameRoom room = repository.findOneById("abc-def");

        // then
        assertNull(room);
    }
}
